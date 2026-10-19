import { getPayload } from 'payload'
import config from '../payload.config'

async function resetPassword() {
  const args = process.argv.slice(2)
  const targetEmail = args[0] || 'test@example.com'
  const newPassword = args[1] || 'Admin123456!'

  try {
    const payload = await getPayload({ config })
    const userRes = await payload.find({
      collection: 'users',
      where: {
        email: { equals: targetEmail },
      },
    })

    if (userRes.docs.length === 0) {
      console.log(`User with email "${targetEmail}" was not found. Creating user...`)
      await payload.create({
        collection: 'users',
        data: {
          email: targetEmail,
          password: newPassword,
        },
      })
      console.log(`\nSuccessfully created admin user:`)
      console.log(`Email:    ${targetEmail}`)
      console.log(`Password: ${newPassword}`)
    } else {
      const user = userRes.docs[0]
      await payload.update({
        collection: 'users',
        id: user.id,
        data: {
          password: newPassword,
        },
      })
      console.log(`\nSuccessfully reset password for:`)
      console.log(`Email:    ${targetEmail}`)
      console.log(`Password: ${newPassword}`)
    }

    process.exit(0)
  } catch (err) {
    console.error('Error resetting password:', err)
    process.exit(1)
  }
}

resetPassword()
