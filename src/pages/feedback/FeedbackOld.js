import React from "react";
import BaseTemplate from "components/partials/BaseTemplate";
import baseStyle from "res/css/base.module.css";
import css from "./feedback.module.css";

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonEnabled: true,
        };

        this.fields = [];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateButton = this.updateButton.bind(this);
    }

    render() {
        const fieldsRef = (el) => this.fields.push(el);

        return (
            <form onSubmit={this.handleSubmit} className={css.feedbackForm}>
                <FieldSet
                    form={this}
                    ref={fieldsRef}
                    input={{
                        type: "text",
                        name: "name",
                        placeholder: "Enter your full name",
                        defaultValue: "Faisal Khan"
                    }}
                    required
                >Full Name</FieldSet>
                <FieldSet
                    form={this}
                    ref={fieldsRef}
                    input={{
                        type: "email",
                        name: "email",
                        placeholder: "Enter your email",
                        defaultValue: "faisal@alfaazplus.com",
                    }}
                    required
                >Email</FieldSet>
                <FieldSet
                    form={this}
                    ref={fieldsRef}
                    select={{
                        options: (
                            <>
                                <option>Select type</option>
                                <option>Verse Issue</option>
                                <option>Translation Issue</option>
                                <option>Recitation Issue</option>
                                <option>Subscription Issue</option>
                                <option>Suggestion</option>
                                <option>Bugs</option>
                                <option>Other</option>
                            </>
                        ),
                        name: "type",
                        defaultValue: "Verse Issue",
                    }}
                    required
                >FeedbackOld type</FieldSet>
                <FieldSet
                    form={this}
                    ref={fieldsRef}
                    textarea={{name: "message", placeholder: "Enter your message", defaultValue: "Hello"}}
                    required
                >Message</FieldSet>
                <button type="submit" className={this.getButtonClass(this.state.buttonEnabled)}>Send</button>
            </form>
        );
    }

    getButtonClass(buttonEnabled) {
        let buttonClass = baseStyle.buttonPrimary;
        if (!buttonEnabled) {
            buttonClass += " " + baseStyle.disabled;
        }
        return buttonClass;
    }

    updateButton() {
        let isErr = false;
        this.fields.some((field) => {
            if (field && field.constructor.name === FieldSet.name) {
                const isError = field.checkError().isError;
                isErr = isError;
                if (isError) {
                    return true;
                }
            }
            return false;
        });
        this.setState({
            buttonEnabled: !isErr,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let isErr = false;

        const values = {};

        this.fields.some((field) => {
            if (field && field.constructor.name === FieldSet.name) {
                const {isError, errorMessage} = field.checkError();
                isErr = isError;
                if (isError) {
                    field.updateState({isError, errorMessage});
                    return true;
                }
                values[field.getName()] = field.getValue();
            }
        });

        if (isErr) {
            return;
        }

        this.submitFeedback(values);
    }

    submitFeedback(data) {
        /*try {
         const docRef =  addDoc(collection(db, "feedbacks"), data);
         console.log("Document written with ID: ", docRef.id);
         } catch (e) {
         console.error("Error adding document: ", e);
         }*/
    }
}

class FieldSet extends React.Component {
    constructor(props) {
        super(props);
        this.errorMessageDefault = "This field is required";
        this.state = {
            isError: false,
            errorMessage: null,
            value: props.defaultValue,
        };

        this.field = React.createRef();

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.fieldProps = {
            onFocus: this.onFocus,
            onBlur: this.onBlur,
        };
    }

    render() {
        let groupClasses = css.group;
        if (this.state.isError) {
            groupClasses += " " + css.error;
        }

        return (
            <>
                <div className={groupClasses}>
                    <div className={css.groupTitle}>
                        {this.props.children} {this.props.required &&
                        <span className={css.requiredFieldMark}>*</span>}
                    </div>
                    {this.props.input && (
                        <input
                            ref={this.field} {...this.props.input}
                            required={this.props.required} {...this.fieldProps} />
                    )}
                    {this.props.textarea && (
                        <textarea
                            ref={this.field} {...this.props.textarea}
                            required={this.props.required} {...this.fieldProps} />
                    )}
                    {this.props.select && (
                        <div className={css.selectWrapper}>
                            <select ref={this.field} name={this.props.select.name} {...this.fieldProps}>
                                {this.props.select.options}
                            </select>
                        </div>
                    )}
                    {this.state.isError &&
                        <div className={css.fieldRequiredMsg}>{this.state.errorMessage}</div>}
                </div>
            </>
        );
    }

    onFocus(e) {
        this.setState({isError: false});
    }

    onBlur(e) {
        this.updateState(this.checkError());
    }

    getName() {
        return this.field.current.name;
    }

    getValue() {
        return this.field.current.value;
    }

    updateState(state) {
        this.setState(state, () => {
            if (this.props.form) {
                this.props.form.updateButton();
            }
        });
    }

    checkError() {
        if (!this.field) {
            return false;
        }

        const field = this.field.current;
        let isError = false;
        let errorMessage = "";

        field.value = field.value.trim();
        if (field.value.length === 0) {
            isError = true;
            errorMessage = this.errorMessageDefault;
        } else {
            if (field.name === "email" && !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(field.value)) {
                isError = true;
                errorMessage = "Please enter a valid email";
            } else if (field.name === "type" && field.value === "Select type") {
                isError = true;
                errorMessage = "Please select a feedback type";
            } else {
                isError = false;
            }
        }

        return {isError, errorMessage};
    }
}

export default function FeedbackOld() {
    return <BaseTemplate pageTitle="FeedbackOld">
        <div className={css.feedbackContainer}>
            <div className={css.pageTitle}>
                <h3>FeedbackOld</h3>
                <div>
                    Use this form to send us your feedback. We will try to respond to you as soon as possible.
                    Kindly visit{" "}
                    <a href="/support" className={css.linkBold}>
                        FAQs
                    </a>{" "}
                    page before using this form. You might find your answer there.
                </div>
            </div>
            <FeedbackForm />
        </div>
    </BaseTemplate>;
}
