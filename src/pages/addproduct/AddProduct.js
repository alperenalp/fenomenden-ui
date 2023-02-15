import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button'
import Form from '../../components/form/Form'
import Input from '../../components/input/Input'

function AddProduct() {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <Form title={"İlan Ekle"}>
        <Input
          type={"text"}
          placeholder={"İlan Başlığı"}
        />
        <Input
          type={"password"}
          placeholder={"İlan Açıklaması"}
        />
        <Input
          type={"password"}
          placeholder={"İlan Fiyatı"}
        />
        <Button title={"İlan Ekle"} onClick={() => navigate("/")}/>
      </Form>
    </div>
  )
}

export default AddProduct