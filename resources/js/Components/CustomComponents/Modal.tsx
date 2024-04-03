// 'use client';

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function Component() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="inline p-0 m-0"
            >
                Toggle modal
            </Button>
            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
                className="backdrop-blur bg-white/  "
            >
                <Modal.Header
                    className="bg-red-600 text-gray-950 from-neutral-900"
                    color="black"
                >
                    Terms of Service
                </Modal.Header>
                <Modal.Body className="bg-red-50">
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-950 dark:text-gray-400">
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-950 dark:text-gray-400">
                            The European Union's General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-red-50">
                    <Button
                        className="bg-cyan-600"
                        onClick={() => setOpenModal(false)}
                    >
                        I accept
                    </Button>
                    <Button
                        color="red"
                        className="bg-red-800 "
                        onClick={() => setOpenModal(false)}
                    >
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Component;
