"use client"
import { useState } from 'react';
import H1 from '@/ui/pricing/S1'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    return (
        <>
            <section className="h-[40vh] max-2xl mx-auto border overflow-hidden">
                <button onClick={toggleModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute z-20">
                    {isOpen ? 'Open modal' : 'Close modal'}
                </button>

                {isOpen && (
                    <div onClick={toggleModal} className="fixed top-0 z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 overflow-hidden">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="modal">
                                <div className="modal-content bg-white">
                                    <h1 className="text-xl font-bold">Modal Title</h1>
                                    <p>This is the content of sdfdsfthe modal.</p>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                )}

                
            </section>
            
            <H1 />


        </>
    );
};

export default Modal;
