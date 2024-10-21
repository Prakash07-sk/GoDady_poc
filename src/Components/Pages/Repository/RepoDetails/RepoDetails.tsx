import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RepoData } from "../../../../Redux/Store/Repository/Repository.selector";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import LazyLoadingComponent from "./LazyLoadingData";


export default function RepoDetails() {
    const [data, setData] = useState<Array<any>>([]);
    const RepoDetails = useSelector(RepoData);

    const methods = useForm();

    useEffect(() => {
        setData(RepoDetails);
    }, [RepoDetails])

    const setFilterByText = (e: any) => {
        const search = e?.target?.value;
        setData(() => !!search ?
            RepoDetails?.filter((value: any) => value?.name?.toLowerCase()?.includes(search?.toLowerCase()))
            : RepoDetails);
    }
    return (
        <Container className="mt-3">
            <Form className="d-flex w-50" onSubmit={() => console.log('')} style={{ maxWidth: '100%' }}>
                <Controller
                    name="searcn"
                    control={methods?.control}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            value={value}
                            onChange={(e: any) => {
                                onChange(e);
                                setFilterByText(e);
                            }}
                        />
                    )}

                />
            </Form>
            <LazyLoadingComponent ListData={data} />
        </Container>
    );
}