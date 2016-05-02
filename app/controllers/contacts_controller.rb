class ContactsController < ApplicationController
    
    def new
        @contact = Contact.new
    end
    
    def create
        @contact = Contact.new(contact_params)
        
        if @contact.save
            render json: nil
        else
            render json: { errors: @contact.errors }, status: :bad_request
        end
    end
    
    private
    def contact_params
       params.require(:contact).permit(:name, :email, :phone, :comments, :contact_type) 
    end
end
