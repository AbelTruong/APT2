import React, { useState } from 'react'
import SubmitApi from '../../apis/submition'
import Button from './../../components/Button'

const Submit = () => {
  const handleSubmit = async () => {
    try {
      let res = await SubmitApi.submit()
      if (!res.success) throw res.error

      console.log('res :>> ', res)
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  return (
    <>
      <Button content={<p>Testing</p>} onClick={() => handleSubmit()} />
    </>
  )
}

export default Submit
