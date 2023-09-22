import re

def validate(data, regex):
    """Custom Validator"""
    return True if re.match(regex, data) else False

def validate_password(password: str):
    """Password Validator"""
    reg = r"\b^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,20}$\b"
    return validate(password, reg)

def validate_username_and_password(username, password):
    """Username and Password Validator"""
    if not (username and password):
        return {
            'username': 'Username is required',
            'password': 'Password is required'
        }
    return True