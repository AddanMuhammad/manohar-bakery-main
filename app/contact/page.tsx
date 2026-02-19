'use client';

import React, { useState, useRef } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Image from 'next/image';
import contact_page from '@/assets/images/sections/store_front.png';
import { Button } from '@/components/ui/Button';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    order_number: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [fileNotification, setFileNotification] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = { ...errors };

    switch (name) {
      case 'first_name':
        if (!value.trim()) {
          newErrors.first_name = 'First name is required';
        } else {
          delete newErrors.first_name;
        }
        break;
      case 'last_name':
        if (!value.trim()) {
          newErrors.last_name = 'Last name is required';
        } else {
          delete newErrors.last_name;
        }
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors.email = 'Invalid email address';
          } else {
            delete newErrors.email;
          }
        }
        break;
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation for email (validate format as user types)
    if (name === 'email' && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    } else if (name === 'email' && !value.trim()) {
      // Clear email error if field is empty (will show on blur)
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
    
    // For other fields, clear error when user starts typing
    if (name !== 'email' && errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    // Clear any previous file notifications/errors immediately
    setFileNotification('');
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.files;
      return newErrors;
    });
    
    if (selectedFiles.length === 0) {
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    // File size limits (25MB total, no per-file limit)
    const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB total in bytes

    // Calculate current total size of already uploaded files
    const currentTotalSize = files.reduce((sum, file) => sum + file.size, 0);

    // Validate file types (only images) - more strict validation
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/bmp', 'image/svg+xml'];
    const validFiles: File[] = [];
    const rejectedFiles: { name: string; reason: string }[] = [];

    selectedFiles.forEach(file => {
      // Check file type
      const isValidType = file.type.startsWith('image/') || validImageTypes.includes(file.type);
      const isValidExtension = /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name);
      
      if (!isValidType || !isValidExtension) {
        rejectedFiles.push({ name: file.name, reason: 'Not an image file' });
        return;
      }

      // Check total size
      const newTotalSize = currentTotalSize + file.size;
      if (newTotalSize > MAX_TOTAL_SIZE) {
        rejectedFiles.push({ 
          name: file.name, 
          reason: `Total size would exceed 25MB limit.` 
        });
        return;
      }

      validFiles.push(file);
    });

    // Show notifications for rejected files
    if (rejectedFiles.length > 0) {
      const reasons = rejectedFiles.map(f => `${f.name}: ${f.reason}`).join(', ');
      setFileNotification(`Some files were skipped: ${reasons}`);
      // Auto-clear notification after 5 seconds
      setTimeout(() => {
        setFileNotification('');
      }, 5000);
    }

    // If no valid files, reset and return
    if (validFiles.length === 0) {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    // Check if total files exceed 3
    if (files.length + validFiles.length > 3) {
      const allowedCount = 3 - files.length;
      setFileNotification(`You can only upload ${allowedCount} more image(s). Maximum 3 images allowed.`);
      // Auto-clear notification after 3 seconds
      setTimeout(() => {
        setFileNotification('');
      }, 3000);
      
      // Add only the allowed number of files
      if (allowedCount > 0) {
        setFiles(prev => [...prev, ...validFiles.slice(0, allowedCount)]);
      }
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    // All valid - add the image files
    setFiles(prev => [...prev, ...validFiles]);
    
    // Reset file input to allow selecting the same file again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const submitFormData = new FormData();
      submitFormData.append('first_name', formData.first_name);
      submitFormData.append('last_name', formData.last_name);
      submitFormData.append('email', formData.email);
      submitFormData.append('message', formData.message);
      if (formData.order_number) {
        submitFormData.append('order_number', formData.order_number);
      }

      // Append files
      files.forEach((file, index) => {
        submitFormData.append(`file_${index}`, file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitFormData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        // Reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          message: '',
          order_number: '',
        });
        setFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.first_name.trim() !== '' &&
           formData.last_name.trim() !== '' &&
           formData.email.trim() !== '' &&
           emailRegex.test(formData.email) &&
           formData.message.trim() !== '' &&
           Object.keys(errors).length === 0;
  };

  return (
    <MainLayout>
      <h1 className='md:text-4xl text-2xl font-bold text-secondary text-center'>Contact Us</h1>
      <p className='text-lg text-secondary/80 text-center'>Get in touch with us for any questions or inquiries</p>
      <div className="container mx-auto px-4 md:py-8 py-4 flex md:flex-row flex-col-reverse gap-12">
        {/* Contact Information */}
        <div className="md:w-6/12 w-full py-8 flex flex-col gap-4">
          <div>
            <h3 className='flex items-center gap-1 md:text-2xl text-xl font-semibold'><MdOutlineLocationOn /> Our Location:</h3>
            <Link className='underline text-lg' href="https://www.google.com/maps/place/Manohar+Vegetarian+Bakery/@49.159112, -122.781784, 15z/data=!4m6!3m5!1s0x5485d0b1f026e773:0xae6e4644ed3f1477!8m2!3d49.159112!4d-122.781784!16s%2Fg%2F11c48slxzn?entry=ttu&g_ep=EgoyMDI1MTEzMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101, Surrey, BC V4N 0Y3</Link>
          </div>
          <div>
            <h3 className='flex items-center gap-1 md:text-2xl text-xl font-semibold'><MdOutlinePhoneInTalk /> Our Phone:</h3>
            <Link className='underline text-lg' href="tel:+16045910699">+1 (604) 591-0699</Link>
          </div>
          <div className='flex-1 shadow-default overflow-hidden rounded-2xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.1841893764936!2d-122.78178403894584!3d49.15911202289665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d0b1f026e773%3A0xae6e4644ed3f1477!2sManohar%20Vegetarian%20Bakery!5e0!3m2!1sen!2s!4v1762984027070!5m2!1sen!2s" 
            width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg md:p-8 p-2 md:w-6/12 w-full">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className='flex gap-4'>
              <div className='w-1/2'>
                <label htmlFor="first_name" className="block text-sm font-medium text-secondary mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-md border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                  placeholder="Your first name"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                )}
              </div>

              <div className='w-1/2'>
                <label htmlFor="last_name" className="block text-sm font-medium text-secondary mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-md border ${errors.last_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                  placeholder="Your last name"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='w-full'>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                rows={6}
                className={`w-full px-4 py-3 rounded-md border min-h-[100px] ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary/20`}
                placeholder="Message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className='flex gap-4'>
              <div className='w-1/3'>
                <div className='flex gap-4'>
                  <div className='w-3/4'>
                    <label htmlFor="order_number" className="block text-sm font-medium text-secondary mb-2">
                      Order No.
                    </label>
                    <input
                      type="text"
                      id="order_number"
                      name="order_number"
                      value={formData.order_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      placeholder="Order Number"
                    />
                  </div>
                </div>
              </div>

              <div className='w-1/3 flex flex-col justify-center items-center gap-2'>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/jpeg,image/jpg,image/png,image/gif,image/webp,image/bmp,image/svg+xml"
                  multiple
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col justify-center items-center gap-2"
                >
                  <IoCloudUploadOutline className='text-2xl text-secondary' />
                  <p className='text-sm font-medium text-secondary mb-2'>Upload Files</p>
                  <p className='text-xs text-secondary/60'>(Max 3 images, 25MB total)</p>
                </label>
                {fileNotification && (
                  <p className="text-amber-600 text-xs text-center max-w-[150px]">
                    {fileNotification}
                  </p>
                )}
                {files.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-secondary">
                        <span className="truncate max-w-[100px]">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className='w-1/3 flex justify-end items-center'>
                <Button 
                  variant='default' 
                  size='lg' 
                  icon={<FiArrowUpRight />}
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className='container mx-auto shadow-default overflow-hidden rounded-2xl my-8 w-[90%] md:w-full'>
        <Image src={contact_page} alt="Contact" width={1000} height={1000} className='w-full h-full object-cover' />
      </div>
    </MainLayout>
  );
}
