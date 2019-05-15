import React from 'react'
import Title from "../globals/Title";
export default function Contact() {
  return (
    <section className="contact py-5">
        <Title title="contact us" />
        <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto ">
        <form action="https://formspree.io/brahimhm470@gmail.com" method="POST"  >
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Brahim Hmida" />

            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" placeholder="exemple@gmail.com" />

            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" cols="30" rows="10" className="form-control" placeholder="put your description here" ></textarea>
            </div>
            <div className="form-group">
             <button className="btn btn-yellow text-capitalize btn-block">send</button>
            </div>
            
        </form>

        </div>

        </div>
    </section>
  )
}
