"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";


import AuthContent from '@/components/routes/components/Auth';
import UnAuthContext from '@/components/routes/components/Unauth';

const Layout = ({ components }) => {

    const { status, data: session } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session !== undefined) {
            setLoading(false);
        }
    }, [session]);


    if (loading) {
        return (
            <div className=" mt-10 max-w-4xl">
                <span className="text-xl">Loading ...</span>
            </div>
        );
    }

    if (status === "authenticated") {
        return (
            <AuthContent components={components} />
        )
    }

    return (
        <UnAuthContext components={components}/>
    );
};

export default Layout;
