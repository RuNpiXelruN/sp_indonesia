class Contact < ActiveRecord::Base
    validates :name, :email, :comments, presence: true
    
    after_create :send_email
    
    private
    def send_email
        if self.contact_type == "maincontact_hire"
            ContactMailer.contact_email(self).deliver
        
        elsif
            self.contact_type == "partners_hire"
            ContactMailer.partner_email(self).deliver
            
        elsif 
            self.contact_type == "printer_hire"
            ContactMailer.printer_email(self).deliver

        else
            ContactMailer.livefeed_email(self).deliver
        
        end
    end
end

