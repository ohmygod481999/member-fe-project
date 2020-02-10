import React, { Fragment } from "react";
import FormGroup from "./utils/FormGroup";

export default function FormPassword() {
    const submitFormHandler = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        // console.log(formData.getAll("name"))
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ': '+ pair[1]); 
         }

         // Update User command here, remove comments and fill the values to it

        // postData.sendCommand("User", "UpdateCustomer" , {
        //         Id: body.id,
        //         MerchantId: Common.getCookie("merchantId"),
        //         Name: body.name,
        //         Password: body.password,
        //         Email: body.email,
        //         Mobile: body.mobile,
        //         AllType: body.type,
        //         Categories: body.categories,
        //         Images: body.images,
        //         CreatedDate: Common.formatDateTime(new Date()),
        //         CreatedBy: Common.getCookie("userId")
        // })
        
    }
    return (
        <Fragment>
            <form onSubmit={submitFormHandler}>
                <FormGroup label="Họ và tên">
                    <input class="form-control" name="name" type="text" />
                </FormGroup>
                <FormGroup label="E-mail">
                    <input class="form-control" name="email" type="text" />
                </FormGroup>
                <FormGroup label="Số điện thoại">
                    <input class="form-control" name="phonenumber" type="text" />
                </FormGroup>

                <div class="kt-separator kt-separator--space-lg kt-separator--fit kt-separator--border-solid"></div>
                <div class="kt-form__actions">
                    <div class="row">
                        <div class="col-xl-3"></div>
                        <div class="col-lg-9 col-xl-6">
                            <button type="submit" class="btn btn-label-brand btn-bold">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
