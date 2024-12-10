import { test } from '@japa/runner'

test.group('Example', (group) => {
  group.setup((self) => {
    self.tap((test) => {
      console.log('Test context (group.setup): ', test.context)
    })
  })

  group.each.setup((test) => {
    console.log('Test context (group.each.setup): ', test.context)
  })

  test('example test', async ({ assert }) => {
    assert.isTrue(true)
  })
})
