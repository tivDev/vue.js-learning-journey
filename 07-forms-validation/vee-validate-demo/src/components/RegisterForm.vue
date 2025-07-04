<template>
  <Form @submit="onSubmit">
    <div>
      <h2>📝 Register</h2>

      <label for="name">Full Name</label><br />
      <Field name="name" id="name" />
      <ErrorMessage name="name" class="error" />
    </div>

    <div>
      <label for="email">Email</label><br />
      <Field name="email" type="email" id="email" />
      <ErrorMessage name="email" class="error" />
    </div>

    <div>
      <label for="password">Password</label><br />
      <Field name="password" type="password" id="password" />
      <ErrorMessage name="password" class="error" />
    </div>

    <button type="submit">Submit</button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'

export default {
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })

    const { handleSubmit } = useForm({
      validationSchema: schema
    })

    // THIS is the correct way
    const onSubmit = handleSubmit((values) => {
      alert('✅ Form submitted!\n' + JSON.stringify(values, null, 2))
    })

    return { onSubmit }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
}
</style>
