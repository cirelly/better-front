import React from 'react'
import CommonInput from '../Inputs/CommonInput'
import { Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import CardWrapper from '../CardWrapper/CardWrapper';
import TextAreaInput from '../Inputs/TextAreaInput';
import addPostValidator from '../../utils/addPostValidator';
import { useAddPost, useGetPosts } from '../../hooks/usePost';
const AddPostForm = () => {

  const {mutateAsync, isLoading, isSuccess} = useAddPost();

  return (
    <div className='c-addForm'>
        <CardWrapper Form={true}>
        <Formik
          initialValues={{ author: '', blogTitle: '',  description: '', category: '' }}
          validationSchema={addPostValidator}
          onSubmit={async (values, actions) => {
            try {
              const data = {
                "author": values.author,
                "description": values.description,
                "title": values.blogTitle,
                "category": values.category
              }
              await mutateAsync(data);
              actions.resetForm({
                values: {
                  blogTitle: '',
                  author: '',
                  description: '',
                  category: ''
                }});
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {(props) => (
          <Form>
            <Field name="lastName">
              {({
                field,
                form: { touched, errors }, 
                meta,
              }) => (
                <div>
                  <Field value={props.values.author} name="author" placeholder="Author" component={CommonInput} />
                  {errors.author && touched.author ? <div className='c-addForm__error'>{errors.author}</div> : null}
                  <Field value={props.values.category} name="category" placeholder="Category" component={CommonInput} />
                  {errors.category && touched.category ? <div className='c-addForm__error'>{errors.category}</div> : null}
                  <Field value={props.values.blogTitle} name="blogTitle" placeholder="Blog Title" component={CommonInput} />
                  {errors.blogTitle && touched.blogTitle ? <div className='c-addForm__error'>{errors.blogTitle}</div> : null}
                  <Field value={props.values.description} name="description" placeholder="Description" component={TextAreaInput} />
                  {errors.description && touched.description ? <div className='c-addForm__error'>{errors.description}</div> : null}
                </div>
              )}
            </Field>
            {/* <Field name="lastName" placeholder="Doe" component={MyInput} /> */}
            <Button type="submit" disabled={isLoading ? true : false}>Save</Button>
          </Form>
        )}
      </Formik>
    </CardWrapper>
    </div>
  )
}

export default AddPostForm;