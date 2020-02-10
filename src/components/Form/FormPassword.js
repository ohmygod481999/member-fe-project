import React, { Fragment } from "react";
import FormGroup from "./utils/FormGroup";
import { postData } from "../../data";

export default function FormProfile() {
    const submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

        
        // Update User command here, remove comments and fill the values to it

        // postData.sendCommand("User", "ChangePasswordUser", {
        //     Id: id,
        //     OldPassword: oldPassword,
        //     Password: newPassword,
        //     ModifiedBy: Common.getCookie("userId"),
        //     ModifiedDate: Common.formatDateTime(new Date())
        // });
    };
    return (
        <Fragment>
            <form onSubmit={submitFormHandler}>
                <FormGroup label="Mật khẩu cũ">
                    <input class="form-control" name="password" type="text" />
                </FormGroup>
                <FormGroup label="Mật khẩu mới">
                    <input
                        class="form-control"
                        name="new-password"
                        type="text"
                    />
                </FormGroup>
                <FormGroup label="Xác nhận mật khẩu">
                    <input
                        class="form-control"
                        name="confirm-password"
                        type="text"
                    />
                </FormGroup>

                <div class="kt-separator kt-separator--space-lg kt-separator--fit kt-separator--border-solid"></div>
                <div class="kt-form__actions">
                    <div class="row">
                        <div class="col-xl-3"></div>
                        <div class="col-lg-9 col-xl-6">
                            <button
                                type="submit"
                                class="btn btn-label-brand btn-bold"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}
