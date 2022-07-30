export const field_rules = {
    password: [
      {
        required: true,
        message: 'Please input your password',
      },
      // {
      //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&_-])[A-Za-z\d@$#!%*?&_-]{8,}$/,
      //   message: t('The password must be alphanumeric with a special character (one of the following: @ $ ! % # * ? & _ -) and contain an uppercase letter and be 8 characters long'),
      // },
    ],
    email: [
      {
        required: true,
        message: 'Please input your email',
      },
    ],
  };
