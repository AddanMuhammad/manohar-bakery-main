import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('first_name') as string;
    const lastName = formData.get('last_name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const orderNumber = formData.get('order_number') as string | null;
    
    // Get uploaded files with size validation
    const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB total
    const MAX_FILES = 3;
    
    const files: File[] = [];
    let totalSize = 0;
    
    for (let i = 0; i < MAX_FILES; i++) {
      const file = formData.get(`file_${i}`) as File | null;
      if (file && file.size > 0) {
        // Validate total size
        if (totalSize + file.size > MAX_TOTAL_SIZE) {
          return NextResponse.json(
            { error: `Total file size exceeds 25MB limit.` },
            { status: 400 }
          );
        }
        
        // Validate file count
        if (files.length >= MAX_FILES) {
          return NextResponse.json(
            { error: `Maximum ${MAX_FILES} files allowed.` },
            { status: 400 }
          );
        }
        
        files.push(file);
        totalSize += file.size;
      }
    }

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'First name, last name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Fleetwoodbakery@gmail.com',
        pass: 'hhjb igtz omxe bqef', // Gmail app password
      },
    });

    const fullName = `${firstName} ${lastName}`;
    
    // Prepare attachments for the admin email
    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      })
    );

    // Email content for admin - Better UI with all form data
    const adminEmailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Order from ${fullName}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
          <tr>
            <td style="padding: 20px 0;">
              <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #5E270B 0%, #8B4513 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; color: #FFF4E8; font-size: 28px; font-weight: bold;">📦 New Order Received</h1>
                    <p style="margin: 10px 0 0 0; color: #FFF4E8; font-size: 14px; opacity: 0.9;">Manohar Bakery - Contact Form Submission</p>
                  </td>
                </tr>
                
                <!-- Alert Banner -->
                <tr>
                  <td style="background-color: #fff3cd; padding: 15px 30px; border-left: 4px solid #ffc107;">
                    <p style="margin: 0; color: #856404; font-size: 14px; font-weight: bold;">
                      ⚡ Action Required: New customer inquiry received
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      You have received a new order/inquiry from a customer. Please review the details below and respond accordingly.
                    </p>
                    
                    <!-- Customer Information -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 25px 0; background-color: #FFF4E8; border-radius: 6px; overflow: hidden;">
                      <tr>
                        <td style="padding: 20px; border-bottom: 1px solid #e0e0e0;">
                          <h2 style="margin: 0 0 15px 0; color: #5E270B; font-size: 20px; font-weight: bold;">Customer Information</h2>
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 10px 0; width: 140px; font-weight: bold; color: #5E270B; font-size: 14px; vertical-align: top;">Full Name:</td>
                              <td style="padding: 10px 0; color: #333333; font-size: 14px; font-weight: 600;">${fullName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 0; font-weight: bold; color: #5E270B; font-size: 14px; vertical-align: top;">First Name:</td>
                              <td style="padding: 10px 0; color: #333333; font-size: 14px;">${firstName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 0; font-weight: bold; color: #5E270B; font-size: 14px; vertical-align: top;">Last Name:</td>
                              <td style="padding: 10px 0; color: #333333; font-size: 14px;">${lastName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 10px 0; font-weight: bold; color: #5E270B; font-size: 14px; vertical-align: top;">Email:</td>
                              <td style="padding: 10px 0; color: #333333; font-size: 14px;">
                                <a href="mailto:${email}" style="color: #5E270B; text-decoration: none; font-weight: 600;">${email}</a>
                              </td>
                            </tr>
                            ${orderNumber ? `
                            <tr>
                              <td style="padding: 10px 0; font-weight: bold; color: #5E270B; font-size: 14px; vertical-align: top;">Order Number:</td>
                              <td style="padding: 10px 0; color: #333333; font-size: 14px; font-weight: 600; background-color: #fff3cd; padding: 5px 10px; border-radius: 4px; display: inline-block;">${orderNumber}</td>
                            </tr>
                            ` : ''}
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px;">
                          <div style="margin-bottom: 10px;">
                            <strong style="color: #5E270B; font-size: 16px; display: block; margin-bottom: 12px;">Customer Message:</strong>
                          </div>
                          <div style="background-color: #ffffff; padding: 20px; border-radius: 4px; border-left: 4px solid #5E270B; color: #333333; font-size: 14px; line-height: 1.8; white-space: pre-wrap; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">${message.replace(/\n/g, '<br>')}</div>
                        </td>
                      </tr>
                      ${files.length > 0 ? `
                      <tr>
                        <td style="padding: 20px; border-top: 1px solid #e0e0e0; background-color: #f8f9fa;">
                          <div style="margin-top: 10px;">
                            <strong style="color: #5E270B; font-size: 16px; display: block; margin-bottom: 12px;">📎 Attachments (${files.length} file${files.length > 1 ? 's' : ''}):</strong>
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 13px;">The customer has attached the following image(s) with their inquiry. Please review them in the email attachments.</p>
                            <ul style="margin: 10px 0 0 20px; padding: 0; color: #333333; font-size: 13px;">
                              ${files.map(file => `<li style="margin: 8px 0; padding: 5px 0;">📷 ${file.name} <span style="color: #999999; font-size: 12px;">(${Math.round(file.size / 1024)} KB)</span></li>`).join('')}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      ` : `
                      <tr>
                        <td style="padding: 20px; border-top: 1px solid #e0e0e0; background-color: #f8f9fa;">
                          <p style="margin: 0; color: #999999; font-size: 13px; font-style: italic;">No attachments were included with this inquiry.</p>
                        </td>
                      </tr>
                      `}
                    </table>
                    
                    <!-- Quick Actions -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 25px 0;">
                      <tr>
                        <td style="padding: 15px; background-color: #f8f9fa; border-radius: 6px; text-align: center;">
                          <p style="margin: 0 0 10px 0; color: #333333; font-size: 14px; font-weight: bold;">Quick Actions:</p>
                          <a href="mailto:${email}?subject=Re: Your inquiry to Manohar Bakery${orderNumber ? ` - Order ${orderNumber}` : ''}" style="display: inline-block; background-color: #5E270B; color: #FFF4E8; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: bold; margin: 5px;">Reply to Customer</a>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 25px 0 0 0; color: #666666; font-size: 13px; line-height: 1.6; padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
                      <strong>Note:</strong> This is an automated notification from the Manohar Bakery contact form. Please respond to the customer's inquiry in a timely manner.
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #FFF4E8; padding: 25px 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 2px solid #5E270B;">
                    <p style="margin: 0 0 10px 0; color: #5E270B; font-size: 16px; font-weight: bold;">Manohar Bakery</p>
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px;">Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101, Surrey, BC V4N 0Y3</p>
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px;">Phone: <a href="tel:+16045910699" style="color: #5E270B; text-decoration: none;">+1 (604) 591-0699</a></p>
                    <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px; line-height: 1.5;">
                      This email was automatically generated from the contact form submission.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email to admin first
    const adminMailOptions = {
      from: '"Manohar Bakery" <Fleetwoodbakery@gmail.com>',
      to: 'Fleetwoodbakery@gmail.com',
      subject: `New order from ${fullName} ${orderNumber ? `| Order Number: ${orderNumber}` : ''}`,
      html: adminEmailContent,
      attachments: attachments,
    };

    await transporter.sendMail(adminMailOptions);

    // Email content for client (confirmation email) - Better UI with all form data
    const clientEmailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Manohar Bakery</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
          <tr>
            <td style="padding: 20px 0;">
              <table role="presentation" style="width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #5E270B 0%, #8B4513 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; color: #FFF4E8; font-size: 28px; font-weight: bold;">Thank You for Contacting Us!</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 30px;">
                    <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      Dear <strong style="color: #5E270B;">${fullName}</strong>,
                    </p>
                    <p style="margin: 0 0 25px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      We have successfully received your message and will get back to you as soon as possible. Below is a summary of the information you provided:
                    </p>
                    
                    <!-- Form Data Summary -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 25px 0; background-color: #FFF4E8; border-radius: 6px; overflow: hidden;">
                      <tr>
                        <td style="padding: 20px; border-bottom: 1px solid #e0e0e0;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 8px 0; width: 140px; font-weight: bold; color: #5E270B; font-size: 14px;">First Name:</td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${firstName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; font-weight: bold; color: #5E270B; font-size: 14px;">Last Name:</td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${lastName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; font-weight: bold; color: #5E270B; font-size: 14px;">Email Address:</td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${email}</td>
                            </tr>
                            ${orderNumber ? `
                            <tr>
                              <td style="padding: 8px 0; font-weight: bold; color: #5E270B; font-size: 14px;">Order Number:</td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${orderNumber}</td>
                            </tr>
                            ` : ''}
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 20px;">
                          <div style="margin-bottom: 10px;">
                            <strong style="color: #5E270B; font-size: 14px; display: block; margin-bottom: 8px;">Your Message:</strong>
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #5E270B; color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
                        </td>
                      </tr>
                      ${files.length > 0 ? `
                      <tr>
                        <td style="padding: 20px; border-top: 1px solid #e0e0e0;">
                          <div style="margin-top: 10px;">
                            <strong style="color: #5E270B; font-size: 14px; display: block; margin-bottom: 8px;">Attachments:</strong>
                            <p style="margin: 0; color: #666666; font-size: 13px;">You have attached ${files.length} file(s) with your message. Our team will review them along with your inquiry.</p>
                            <ul style="margin: 10px 0 0 20px; padding: 0; color: #333333; font-size: 13px;">
                              ${files.map(file => `<li style="margin: 5px 0;">${file.name}</li>`).join('')}
                            </ul>
                          </div>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                    
                    <p style="margin: 25px 0 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      We appreciate your interest in <strong style="color: #5E270B;">Manohar Bakery</strong> and look forward to serving you!
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #FFF4E8; padding: 25px 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 2px solid #5E270B;">
                    <p style="margin: 0 0 10px 0; color: #5E270B; font-size: 16px; font-weight: bold;">Manohar Bakery</p>
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px;">Fruiticana & BMO plaza, 15905 Fraser Hwy Unit 101, Surrey, BC V4N 0Y3</p>
                    <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px;">Phone: <a href="tel:+16045910699" style="color: #5E270B; text-decoration: none;">+1 (604) 591-0699</a></p>
                    <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px; line-height: 1.5;">
                      This is an automated confirmation email. Please do not reply to this message.<br>
                      If you have any questions, please contact us directly.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send confirmation email to client
    const clientMailOptions = {
      from: '"Manohar Bakery" <Fleetwoodbakery@gmail.com>',
      to: email,
      subject: `Thank you for contacting Manohar Bakery ${orderNumber ? `| Order Number: ${orderNumber}` : ''}`,
      html: clientEmailContent,
      attachments: attachments.length > 0 ? attachments : undefined, // Include attachments if any
    };

    await transporter.sendMail(clientMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

