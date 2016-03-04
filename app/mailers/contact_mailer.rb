class ContactMailer < ActionMailer::Base
    # default to: 'justindavidson23@gmail.com'
    
    def contact_email(contact)
        @contact = contact

        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
    
    def partner_email(contact)
        @contact = contact
        
        mail(to: 'justin@socialplayground.com.au', bcc: 'justindavidson23@rocketmail.com')
        mail(from: @contact.email, subject: 'Enquiry from Singapore Partner Form').deliver
    end
    
    def printer_email(contact)
        @contact = contact
        
        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
    
    def gif_email(contact)
        @contact = contact
        
        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
    
    def selfie_email(contact)
        @contact = contact
        
        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
    
    def livefeed_email(contact)
        @contact = contact
        
        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
end


