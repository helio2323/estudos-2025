"use client"

import { useContext } from "react";

import Link from "next/link";
import styles from "../header/header.module.css"

import { signIn, signOut, useSession } from "next-auth/react";
export default function Header() {

    const { data: session, status } = useSession();

    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>
                            Tarefas<span>+</span>
                        </h1>
                    </Link>
                {session?.user && (
                <Link href="/dashboard">
                <button className={styles.button}>Meu Painel</button>
                </Link>
                )}

                </nav>

                { status == "loading" ? (
                    <></>
                ) : session ? (
                    <button className={styles.loginButton} onClick={() => signOut()}> 
                        Olá {session.user?.name} 
                    </button>
                ) : (
                    <button 
                    className={styles.loginButton}
                    onClick={() => signIn("google")}>
                        Login
                        </button>
                    
                )}
            </section>
        </header>
    );
}