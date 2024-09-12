export default function QuestionBox({ children, title }) {
    return (
        <div className="py-[4.45%] space-y-[1.78%] border-t border-[#f1f1f1] border-dotted">
            <p className="question_title">{title}</p>
            <p className="question_text px-[1.78%]">{children}</p>
        </div>
    );
}
