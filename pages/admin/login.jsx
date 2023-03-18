import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import AuthForm from 'components/auth/auth-form';
import { PageLoader } from 'components/Loader';

function AuthPage() {
    const { status } = useSession();
    const router = useRouter();



    if (status === "loading") {
        return <PageLoader />;
    }
    else if (status === "unauthenticated") {
        return <AuthForm />;
    }
    if (status === "authenticated") {
        router.push('/admin/dashboard');
    }

    return <AuthForm />;
}

export default AuthPage;