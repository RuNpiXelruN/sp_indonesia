class ContactMailer < ActionMailer::Base
    default to: 'info@socialplayground.com.sg'
    
    def contact_email(contact)
        @contact = contact

        mail(from: @contact.email, subject: 'Contact Form Message').deliver
    end
    
    def partner_email(contact)
        @contact = contact
        

        mail(from: @contact.email, subject: 'Contact Form Message').deliver
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


