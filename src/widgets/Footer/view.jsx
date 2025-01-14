import React from 'react'
import styles from '@styles/scss/footer.module.scss'
import IconLogoFacebook from '@/common/icons/socials/Facebook'
import IconInstagram from '@/common/icons/socials/Instagram'
import IconYoutube from '@/common/icons/socials/Youtube'
import IconWeb from '@/common/icons/socials/Web'
import IconMail from '@/common/icons/socials/Mail'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.topRow}>
                    <span className={styles.topTitle}>Connect Us</span>
                </div>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <div className={styles.detailRow}>
                            <div className={styles.detailLeft}>
                                <span className={styles.contactTitle}>Jubin</span>
                            </div>
                            <div className={styles.detailLeft}>
                                <span className={styles.contactTitle}>+91 90613 13287</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin" width="100%" height="280" loading="lazy" style={{ borderRadius: '10px' }}></iframe>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.icon}>
                            <IconLogoFacebook />
                        </div>
                        <div className={styles.icon}>
                            <IconInstagram />
                        </div>
                        <div className={styles.icon}>
                            <IconYoutube />
                        </div>
                        <div className={styles.icon}>
                            <IconWeb />
                        </div>
                        <div className={styles.icon}>
                            <IconMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
