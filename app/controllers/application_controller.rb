class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  if Rails.env.production?

      before_filter :authenticate

      protected

      def authenticate
        authenticate_or_request_with_http_basic do |username, password|
          username == "jd2015" && password == "jd2015"
        end
      end
    end
    
  private
    def allow_iframe
      response.headers.delete "X-Frame-Options"
    end
end
