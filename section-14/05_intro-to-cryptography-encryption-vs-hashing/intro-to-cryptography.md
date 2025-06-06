# 🛡️ Introduction to Cryptography

Cryptography is the art and science of securing data by transforming it into a format that can only be understood by authorized parties. It ensures **confidentiality**, **integrity**, **authentication**, and **non-repudiation** of information.

## 🔐 Types of Cryptography

### 1. **Encryption (Reversible)**

Encryption is the process of converting data into an unreadable format to prevent unauthorized access. It can be reversed using a **key**.

#### Common Algorithms:

- AES (Advanced Encryption Standard)
- RSA (Rivest–Shamir–Adleman)
- DES (Data Encryption Standard)

#### ✍️ Terminology in Encryption/Decryption

| Term               | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| **Plaintext**      | The original readable message or data.                                    |
| **Ciphertext**     | The encrypted, unreadable version of the plaintext.                       |
| **Encryption**     | The process of converting plaintext into ciphertext using a key.          |
| **Decryption**     | The process of converting ciphertext back to plaintext using a key.       |
| **Key**            | A secret value used in encryption and decryption.                         |
| **Symmetric Key**  | The same key is used for both encryption and decryption.                  |
| **Asymmetric Key** | A key pair: public key (for encryption) and private key (for decryption). |

---

### 2. **Hashing (Irreversible)**

Hashing is the process of converting data into a fixed-size bits, which typically represents a digest of that data. It is **one-way**, meaning it cannot be reversed.

#### Common Algorithms:

- SHA-256 (Secure Hash Algorithm)
- MD5 (Message Digest Algorithm) (Obsolete)
- SHA-1 (Obsolete)

#### ✍️ Terminology in Hashing

| Term              | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| **Message**       | The original input data (e.g., a password, file, or string).           |
| **Hash / Digest** | The fixed-length output generated by the hashing algorithm.            |
| **Hash Function** | The algorithm that maps data of arbitrary size to a fixed-size output. |
| **Collision**     | When two different inputs produce the same hash (undesirable).         |
| **Salt**          | Random data added to input to prevent hash-based attacks.              |

---

## 🧠 Summary

- Use **encryption** when you want to recover the original data later.
- Use **hashing** when you only want to verify data integrity or store secrets like passwords.
- Always choose strong, modern algorithms and avoid outdated ones like MD5 or SHA-1.

Cryptography is a foundational part of modern cybersecurity and essential for protecting digital information.
