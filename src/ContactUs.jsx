import { useState } from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [groupName, setGroupName] = useState();
  const [link, setLink] = useState();
  const [desc, setDesc] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("uploadRequest")
      .insert([{ name, phone, groupName, link, desc }])
      .select();

    setName("");
    setPhone("");
    setGroupName("");
    setLink("");
    setDesc("");
    console.log(data, error);
  }

  return (
    <div>
      <div>
        <h2 className={styles.titleMain}>Syed's Ecommerce Agency</h2>
        <h3 className={styles.title}>Registration Form</h3>
        <p className={styles.description}>
          Submit this form to get enroll in our Courses!
        </p>
      </div>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Name
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="phone" className={styles.name}>
              Father Name
            </label>
            <input
              id="phone"
              type="text"
              className={styles.nameInput}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="group-name" className={styles.name}>
              CNIC No
            </label>
            <input
              id="group-name"
              type="text"
              className={styles.nameInput}
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Date Of Birth
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Gender
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Phone
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              Course
            </label>
            <select>
            <option>Amazon</option>
            <option>Social Media Marketing</option>
            <option>Web Development</option>
            <option>English</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.name}>
              payment Slip
            </label>
            <input
              id="name"
              type="text"
              className={styles.nameInput}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.marginTopSmall}`}>
          <label htmlFor="desc" className={styles.name}>
            Message
          </label>
          <input
            id="desc"
            className={`${styles.nameInput} ${styles.desc}`}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <span> <input type="checkbox"/> I agree with the terms and conditions</span>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
export default ContactUs;
