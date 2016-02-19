class ContactsController < ApplicationController
    
    def new
        @contact = Contact.new
    end
    
    def create
        @contact = Contact.new(contact_params)
        
        if @contact.save
            # flash[:notice] = "Message Sent!"
            # redirect_to root_path
        else
            # flash[:notice] = "Error. Message not sent."
            redirect_to root_path
        end
    end
    
    private
    def contact_params
       params.require(:contact).permit(:name, :email, :phone, :comments, :contact_type) 
    end
end
