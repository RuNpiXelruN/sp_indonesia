class PagesController < ApplicationController
    after_filter :allow_iframe
    
    def homepage
    end
    
    def gifpage
    end
    
    def selfies
    end
    
    def testnav
    end
end
