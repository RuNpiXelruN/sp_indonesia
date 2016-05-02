class ContactMailer < ActionMailer::Base
    # default to: 'justindavidson23@gmail.com'
    
    def contact_email(contact)
        @contact = contact
        
        mail(to: 'hello@socialplayground.co.id', bcc: 'justin@socialplayground.com.au')
        mail(from: @contact.email, subject: 'Enquiry from Home Page').deliver
    end
    
    def partner_email(contact)
        @contact = contact
        
        mail(to: 'partners@socialplayground.com.au', bcc: 'justindavidson23@gmail.com')
        mail(from: @contact.email, subject: "Enquiry from Indonesia's Partner Form").deliver
    end
    
    def printer_email(contact)
        @contact = contact
        
        mail(to: 'hello@socialplayground.co.id', bcc: 'justin@socialplayground.com.au')
        mail(from: @contact.email, subject: 'Enquiry from Instagram Printer Page').deliver
    end
    
    # def gif_email(contact)
    #     @contact = contact
        
    #     mail(from: @contact.email, subject: 'Contact Form Message').deliver
    # end
    
    # def selfie_email(contact)
    #     @contact = contact
        
    #     mail(from: @contact.email, subject: 'Contact Form Message').deliver
    # end
    
    def livefeed_email(contact)
        @contact = contact
        
        mail(to: 'hello@socialplayground.co.id', bcc: 'justin@socialplayground.com.au')
        mail(from: @contact.email, subject: 'Enquiry from LiveFeed Page').deliver
    end
end


