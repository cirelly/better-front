import * as yup from 'yup';
const addPostValidator = yup.object({
    author: yup
      .string('Insert the author.')
      .min(3, 'Must be more than 3 characters.')
      .max(50)
      .required('The field "Author" is required.'),
    blogTitle: yup
    .string('Insert the blog title.')
    .required('The field "Blog Title" is required.')
    .min(3, 'Must be more than 3 characters')
    .max(50),
    category: yup
    .string('Insert the blog title.')
    .required('The field "Category" is required.')
    .min(3, 'Must be more than 3 characters')
    .max(50),
    description: yup
    .string('Insert the content.')
    .required('The field "Content" is required.')
    .min(3, 'Must be more than 3 characters')
    .max(500)
  });

  export default addPostValidator;