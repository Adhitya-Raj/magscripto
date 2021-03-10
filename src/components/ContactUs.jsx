function ContactUs() {
    return(
        <div class="main">
            <div class="text-center">
                <h1 class="display-2">Get in touch</h1>
                <p class="display-6">For booking services or If you have any queries feel free to contact us anytime by filling out this form. We will respond at the earliest. Kudos!</p>
            </div>
            <div class="container">
                <form action="" class="border p-3">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label htmlFor="queryType" class="form-label">Service:</label>
                            <select name="queryType" id="queryType" class="form-select">
                                <option value="Query">Query</option>
                                <option value="Freelance">Freelance</option>
                                <option value="One-time">One-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="name" class="form-label">Name:</label>
                            <input id="name" name="name" type="text" placeholder="Your Name" class="form-control"/>
                        </div>
                        <div class="col-12">
                            <label htmlFor="emailId" class="form-label">Email ID:</label>
                            <input type="email" name="emailId" id="emailId" placeholder="yourname@email.com" class="form-control"/>
                        </div>
                        <div class="col-12">
                            <label htmlFor="phoneNumber" class="form-label">Phone Number:</label>
                            <input type="text" name="phoneNumber" id="emailId" placeholder="+919876543210" class="form-control"/>
                        </div>
                        <div class="col-12">
                            <label htmlFor="queryDescription" class="form-label">Query Description:</label>
                            <textarea name="queryDescription" id="queryDescription" cols="20" rows="3" class="form-control" placeholder="Enter details of your query"></textarea>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Submit Query</button>
                        </div>
                    </div>                
                </form>
            </div>
        </div>
    );
}

export default ContactUs;