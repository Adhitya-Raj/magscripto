function ContactUs() {
    return(
        <div className="main">
            <div className="text-center">
                <h1 className="display-2">Get in touch</h1>
                <p className="display-6">For booking services or If you have any queries feel free to contact us anytime by filling out this form. We will respond at the earliest. Kudos!</p>
            </div>
            <div className="container">
                <form action="" className="border p-3">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="queryType" className="form-label">Service:</label>
                            <select name="queryType" id="queryType" className="form-select">
                                <option value="Query">Query</option>
                                <option value="Freelance">Freelance</option>
                                <option value="One-time">One-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input id="name" name="name" type="text" placeholder="Your Name" className="form-control"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="emailId" className="form-label">Email ID:</label>
                            <input type="email" name="emailId" id="emailId" placeholder="yourname@email.com" className="form-control"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input type="text" name="phoneNumber" id="emailId" placeholder="+919876543210" className="form-control"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="queryDescription" className="form-label">Query Description:</label>
                            <textarea name="queryDescription" id="queryDescription" cols="20" rows="3" className="form-control" placeholder="Enter details of your query"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit Query</button>
                        </div>
                    </div>                
                </form>
            </div>
        </div>
    );
}

export default ContactUs;