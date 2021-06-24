import { useState } from 'react'
import axios from 'axios'
import './Contactus.css'

const formSubmitUrl = {
    dev: "http://localhost:3500/api/form",
    devReal: "https://formsubmit.co/0fdce0590d4580d3d661c340d680f8c2",
    prod: "https://formsubmit.co/65117a66cd6c7e95d25c84daadecd48d"
}

function ContactUs() {

    const [form, setForm] = useState(null)
    const [formReturn, setFormReturn] = useState("false")

    function onChange(event){
        setForm({...form,[event.target.name]:event.target.value})
    }

    function resetForm(){
        setTimeout(()=>{
            setForm(null)
            setFormReturn("false")
        },200)
        document.getElementById("contactForm").reset()
    }

    async function onSubmit(event){
        const modalToggle = document.getElementById("modalToggle");
        event.preventDefault()
        setFormReturn("pending")
        modalToggle.click();
        setForm({...form,_captcha: "false"})
        let data = await axios.post(formSubmitUrl.prod,form,{ headers:{ 'Content-Type': 'application/json' }})
            .catch( () => {
                setFormReturn("error")
            })
        if(data && data.status === 200)
            setFormReturn("true")
        else
            setFormReturn("error")
    }

    return(
        <div className="main">
            <div className="text-center">
                <h1 className="display-2">Get in touch</h1>
                <p className="display-6">For booking services or If you have any queries feel free to contact us anytime by filling out this form. We will respond at the earliest. Kudos!</p>
            </div>
            <div className="container">
                <form onSubmit={onSubmit} id="contactForm" className="border p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="queryType" className="form-label">Service:</label>
                            <select onChange={onChange} name="Query" id="queryType" className="form-select" required>
                                <option value="Query">Query</option>
                                <option value="Freelance">Freelance</option>
                                <option value="One-time">One-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                            {form && form.Query === "Freelance" &&
                            <>
                                <label htmlFor="Service" className="form-label">Service:</label>
                                <select onChange={onChange} name="Service" id="serviceType" className="form-select">
                                    <option value="Custom">Custom Content</option>
                                    <option value="Web">Web Content</option>
                                    <option value="Social Media">Social Media Content</option>
                                </select>
                            </>
                            }
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input onChange={onChange} id="name" name="Name" type="text" placeholder="Your Name" className="form-control" required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="emailId" className="form-label">Email ID:</label>
                            <input onChange={onChange} type="email" name="EmailId" id="emailId" placeholder="yourname@email.com" className="form-control" required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input onChange={onChange} type="text" name="Phone Number" id="emailId" placeholder="+919876543210" className="form-control" required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="queryDescription" className="form-label">Query Description:</label>
                            <textarea onChange={onChange} name="Description" id="queryDescription" cols="20" rows="3" className="form-control" placeholder="Enter details of your query" required></textarea>
                        </div>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="text" name="_honey" style={{display:"none"}} onChange={onChange}/>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Query</button>
                        </div>
                    </div>                
                </form>
                <button type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#confirmModal" id="modalToggle">
                modal
                </button>
                <div class="modal fade" id="confirmModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {
                            formReturn==="true" &&
                            <>
                            <p className="text-center fs-5">Success!</p>
                            <div class="swal2-icon swal2-success swal2-animate-success-icon" style={{display: "flex"}}>
                            <div class="swal2-success-circular-line-left" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                            <span class="swal2-success-line-tip"></span>
                            <span class="swal2-success-line-long"></span>
                            <div class="swal2-success-ring"></div> 
                            <div class="swal2-success-fix" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                            <div class="swal2-success-circular-line-right" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                            </div>
                            <p className="text-center fs-5">Thank you! We'll get back to you soon!</p>
                            </>
                        }
                        {
                            formReturn ==="error" &&
                            <>
                                <p className="fs-5 text-center">Error</p>
                                <div class="swal2-icon swal2-error swal2-animate-error-icon" style={{display: "flex"}}><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div>
                                <p className="fs-6 text-center">Uh oh, something went wrong on our side. Kindly reach us by mail linked in the footer<br/>Sorry for the inconvenience</p>
                            </>
                        }
                        {
                            formReturn === "pending" &&
                            <>
                                <div class="success-checkmark">
                                    <div class="check-icon">
                                        <div class="icon-circle"></div>
                                    </div>
                                </div>
                                <p className="fs-5 text-center">Processing...</p>
                            </>
                        }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" disabled={(formReturn !== "true" && formReturn!=="error") ? true : false} data-bs-dismiss="modal" onClick={resetForm}>Close</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs