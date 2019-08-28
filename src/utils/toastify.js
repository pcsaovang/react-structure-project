import React from 'react'
import { toast } from 'react-toastify'
import ReactMarkdown from 'react-markdown'

const toastify = ({ msg = '', type = 'success' }) => {
  return toast(<ReactMarkdown source={msg} />, { type })
}

export default toastify
