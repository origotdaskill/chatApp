// pages/messages.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated, getUserRole } from '../utils/auth';

const MessagesPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        if (!isAuthenticated()) {
            router.push('/login');
            return;
        }
        
        // Check user role and redirect accordingly
        const role = getUserRole();
        if (role !== 'doctor') {
            router.push('/unauthorized');
        }
    }, []);

    return (
        <div>
            {/* Render messages UI */}
        </div>
    );
}

export default MessagesPage;
