class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_locale
  
  # if Rails.env.production?

  #     before_filter :authenticate

  #     protected

  #     def authenticate
  #       authenticate_or_request_with_http_basic do |username, password|
  #         username == "jd2015" && password == "jd2015"
  #       end
  #     end
  #   end
    
  private
    def allow_iframe
      response.headers.delete "X-Frame-Options"
    end

    def set_locale
      if cookies[:sp_locale] && I18n.available_locales.include?(cookies[:sp_locale].to_sym)
        l = cookies[:sp_locale].to_sym
      else
        l = I18n.default_locale
        cookies.permanent[:sp_locale] = l
      end
      I18n.locale = l
    end
end
