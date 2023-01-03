import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Gender = [
    { key: 'm', text: 'Male', value: 'male'},
    { key: 'f', text: 'Female', value: 'female' },
]

const Drop = () => (
  <Dropdown
        selection
        options={Gender}error
    placeholder='Choose an option'
  />
)

export default Drop;