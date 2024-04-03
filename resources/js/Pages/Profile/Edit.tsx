import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import BackGroundVid from '@/Components/CustomComponents/dump/BackGroundVid';

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl dark:text-gray-200 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8  pb-2 backdrop-blur bg-white/10 mx-5 mb-5 rounded-b-xl drop-shadow-lg shadow-2xl   sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                        
                    </div>

                    <div className="p-4 sm:p-8 pb-2 backdrop-blur bg-white/10 mx-5 mb-5 rounded-b-xl drop-shadow-lg shadow-2xl    shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 pb-2 backdrop-blur bg-white/10 mx-5 mb-5 rounded-b-xl drop-shadow-lg shadow-2xl    shadow sm:rounded-lg">
                    <DeleteUserForm className="max-w-xl inline" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
