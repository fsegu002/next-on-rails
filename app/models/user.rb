class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  validates :email, uniqueness: true

  def to_token_payload
      {
          sub: id,
          email: email
      }
  end
end
