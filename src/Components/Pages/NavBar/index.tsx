import { ReactNode } from "react";
import NavContent from "./NavContent";

type propsData = {
    children: ReactNode
}
export default function NavBar(props: propsData) {
    const { children } = props;
    return (
        <>
            <NavContent />
            {children}
        </>

    );
}