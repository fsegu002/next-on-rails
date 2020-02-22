class ApplicationController < ActionController::API
  include Knock::Authenticable

  private

    def authorize_as_admin
      render json: {}, status: 401 unless !current_user.nil? && current_user.role == 'admin'
    end
    
end
