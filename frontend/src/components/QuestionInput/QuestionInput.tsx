import { useState } from "react";
import { Stack, TextField } from "@fluentui/react";
import { SendRegular } from "@fluentui/react-icons";
import Send from "../../assets/Send.svg";
import styles from "./QuestionInput.module.css";

interface Props {
    onSend: (question: string, patient: string, id?: string) => void;
    disabled: boolean;
    placeholder?: string;
    clearOnSend?: boolean;
    conversationId?: string;
}

export const QuestionInput = ({ onSend, disabled, placeholder, clearOnSend, conversationId }: Props) => {
    const [question, setQuestion] = useState<string>("");
    const [selectedPatient, setSelectedPatient] = useState<string>("*");

    const handlePatientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPatient(event.target.value);
    }   

    const sendQuestion = () => {
        if (disabled || !question.trim()) {
            return;
        }

        if(conversationId){
            onSend(question, selectedPatient, conversationId);
        }else{
            onSend(question, selectedPatient);
        }

        if (clearOnSend) {
            setQuestion("");
            setSelectedPatient("*");
        }
    };

    const onEnterPress = (ev: React.KeyboardEvent<Element>) => {
        if (ev.key === "Enter" && !ev.shiftKey) {
            ev.preventDefault();
            sendQuestion();
        }
    };

    const onQuestionChange = (_ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setQuestion(newValue || "");
    };

    const sendQuestionDisabled = disabled || !question.trim();

    return (
        <Stack>
            <select value={selectedPatient} onChange={handlePatientChange}>
                <option value="*">All patients</option>
                <option value="56465A53536D56724E555657564570505A57316A4D5652565258684E524556335457706E50513D3D">Diego Diaz Porras</option>
                <option value="56465A53536D56724E555657564570505A57316A4D5652565258684F616C6C355430525650513D3D">Santiago Zapico Martin</option>
                <option value="56465A53536D56724E555657564570505A57316A4D56525652544E4E616C45795455453950513D3D">Alberto Porras</option>
                <option value="56465A53536D56724E555657564570505A57316A4D5652565258684F52456C335431524650513D3D">Maria Vidal</option>
            </select>
            <Stack horizontal className={styles.questionInputContainer}>
                <TextField
                    className={styles.questionInputTextArea}
                    placeholder={placeholder}
                    multiline
                    resizable={false}
                    borderless
                    value={question}
                    onChange={onQuestionChange}
                    onKeyDown={onEnterPress}
                />
                <div className={styles.questionInputSendButtonContainer} 
                    role="button" 
                    tabIndex={0}
                    aria-label="Ask question button"
                    onClick={sendQuestion}
                    onKeyDown={e => e.key === "Enter" || e.key === " " ? sendQuestion() : null}
                >
                    { sendQuestionDisabled ? 
                        <SendRegular className={styles.questionInputSendButtonDisabled}/>
                        :
                        <img src={Send} className={styles.questionInputSendButton}/>
                    }
                </div>
                <div className={styles.questionInputBottomBorder} />
            </Stack>
        </Stack>
    );
};
