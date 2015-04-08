class User < ActiveRecord::Base
	has_many :todos
	has_secure_password
	validates :email, presence: true, uniqueness: true
	validates :password
end
