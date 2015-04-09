class User < ActiveRecord::Base
	has_many :todos
	has_secure_password
	validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
	validates :username, presence: true
end
