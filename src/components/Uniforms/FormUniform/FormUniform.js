import React, { useState } from 'react'

function FormUniform() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        typeClothing: "",
        quantity: "",
        quantityLogos: "",
        uploadDesign: "",
        uploadLogos: "",
        terms: "",
    })

    function handleChange() {

    }

    return (
        <>
        <form className='form-uniform' action="https://formsubmit.co/354adf7ac3f23e98449f4f9c828f01f9" method="post" enctype="multipart/form-data">

            <fieldset className='uniform-user-box'>
                <legend>Datos del cliente</legend>
                <section>
                    <label htmlFor="name">Nombre</label>
                    <input
                        className="form-input formik-input1"
                        id="firstName"
                        name="firstName"
                        type='text'
                        placeholder="Jane"
                        onChange={handleChange}
                    />
                </section>

                <section>
                    <label className="formik-input3" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                        className="form-input"
                    />
                </section>


                <section>
                    <label htmlFor="lastName">Celular</label>
                    <input
                        className="form-input formik-input2"
                        accept="application/pdf, .pdf"
                        multiple
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="+57 123 456 78 90"
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="name">País</label>
                    <input
                        className="form-input formik-input1"
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Colombia"
                        onChange={handleChange}
                    />
                </section>
                <section>
                    <label htmlFor="name">Ciudad</label>
                    <input
                        className="form-input formik-input1"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Colombia"
                        onChange={handleChange}
                    />
                </section>


            </fieldset>

            <fieldset className='uniform-design-box'>
                <legend>Datos del diseño</legend>
                <section>
                    <label htmlFor="name">Tipo de prenda</label>
                    <input
                        className="form-input formik-input1"
                        id="typeClothing"
                        name="typeClothing"
                        type="text"
                        placeholder="Sudadera"
                        onChange={handleChange}
                    />
                </section>

                <section>
                    <label className="formik-input3" htmlFor="email">
                        Cantidad
                    </label>
                    <input
                        id="quantity"
                        name="quantity"
                        placeholder="1"
                        type="number"
                        className="form-input"
                    />
                </section>


                <section>
                    <label htmlFor="lastName">Cantidad logotipos</label>
                    <input
                        className="form-input formik-input2"
                        accept="application/pdf, .pdf"
                        multiple
                        type="number"
                        id="quantityLogos"
                        name="quantityLogos"
                        placeholder="1"
                        onChange={handleChange}
                    />
                </section>

                <section>
                <label htmlFor="lastName">Sube tu diseño</label>
                <input
                    className="form-input formik-input2"
                    accept="application/pdf, .pdf"
                    multiple
                    type="file"
                    id="uploadDesign"
                    name="uploadDesign"
                    placeholder="Doe"
                    onChange={handleChange}
                    title="Adjuntar"
                />
            </section>
            <section>
                <label htmlFor="lastName">Sube tus logos</label>
                <input
                    className="form-input formik-input2"
                    accept="application/pdf, .pdf"
                    multiple
                    type="file"
                    id="uploadLogos"
                    name="uploadLogos"
                    placeholder="Doe"
                    onChange={handleChange}
                    title="Adjuntar"
                />
            </section>
            <input type="hidden" name="_autoresponse" value="Gracias por comunicarte con nosotros, nos contactaremos lo más pronto posible"></input>
            <button className="formik-button" type="hidden" name="_next" value="https://nayasport.com.co/" >
                Enviar
            </button>

            </fieldset>

        </form>
        </>
    )
}

export default FormUniform