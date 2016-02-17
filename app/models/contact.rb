class Contact < ActiveRecord::Base
    validates :name, :email, :comments, presence: true
    
    after_create :send_email
    
    private
    def send_email
        if self.contact_type == 'general_homepage'
            ContactMailer.contact_email(self).deliver
        
        elsif
            self.contact_type == "live"
        
        else
            ContactMailer.partner_email(self).deliver
        
        end
    end
end

