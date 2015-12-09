class PagesController < ApplicationController
    after_filter :allow_iframe
    
    def homepage
    end
    
    def printer_page
    end
    
    def gifpage
    end
    
    def selfies
    end
    
    def testnav
    end
end
