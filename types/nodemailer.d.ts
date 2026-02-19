declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<any>;
  }

  export interface MailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
    attachments?: Attachment[];
  }

  export interface Attachment {
    filename?: string;
    content?: Buffer | string;
    contentType?: string;
    path?: string;
  }

  export function createTransport(options: any): Transporter;
}

