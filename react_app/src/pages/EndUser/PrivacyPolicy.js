import React, { useEffect } from "react";
import words from "../../words";
import './TermsPolicy.css'

export default function PrivacyPolicy(){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = words.terms.privacypolicy.titleJP;
    }, []);

    return(
        <div className="policy layout-1 pt-150 px-paragraph">
            <div className="header text-align-ct">
                <div className="p-title mx-s">{words.terms.privacypolicy.titleJP}</div>
                <div className="en-title mb-l">{words.terms.privacypolicy.titleEN}</div>
                <div className="spark p24"></div>
            </div>
            <div className="content">
                <p>
                    <span className="bold">第1条（基本方針）</span><br/>
                    <span className="bold">integral you</span>（以下「甲」とする）は、以下のとおり情報保護方針を定め、利用者が安心してサービスを利用できるように個人情報の適切な保護に努めます。<br/>
                </p>
                <p>
                    <span className="bold">第２条（個人情報の収集と定義）</span><br/>
                    <span className="bold">integral you</span> は、利用者が問い合わせやメルマガ購読などのサービスを利用する際、利用者の同意に基づき個人情報を入力していただくことにより、利用者の個人情報を収集しています。個人情報は、氏名、生年月日、電話番号、メールアドレス、SNSアカウントおよびその内容等とし、上記を組み合わせることで特定の個人が識別できる情報を指します。<br/>
                </p>
                <p>
                    <span className="bold">第３条（個人情報の利用目的）</span><br/>
                    個人情報を収集・利用する目的は、以下のとおりです。<br/>
                    ・問い合わせに回答するため（本人確認を行うことを含む）<br/>
                    ・サービスの提供・運営のため<br/>
                    ・入金確認の連絡をするため<br/>
                    ・利用者が利用中のサービスの新機能、更新情報、キャンペーン等および <span className="bold">integral you</span> が提供する他のサービスの案内を送付するため<br/>
                    ・メンテナンス、重要なお知らせなど必要に応じた連絡をするため<br/>
                    ・上記の利用目的に付随する目的のため<br/>
                </p>
                <p>
                    <span className="bold">第４条（個人情報の第三者への提供）</span><br/>
                    <span className="bold">integral you</span> は、利用者の同意なしに、第三者に個人情報を提供することはありません。ただし、次の場合を除きます。<br/>
                    ・法令等により関係当局より提供を要求された場合<br/>
                </p>
                <p>
                    <span className="bold">第５条（個人情報の管理）</span><br/>
                    <span className="bold">integral you</span> は、利用者の個人情報を不正アクセス、改変、破壊、漏洩、紛失等から守るため、セキュリティーシステムの整備を行っています。<br/>
                </p>
                <p>
                    <span className="bold">第６条（プライバシーポリシーの改定）</span><br/>
                    本ポリシーは、適切に個人情報を保護する目的から、改定される場合があります。法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく、改定することができるものとします。改定後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。<br/>
                </p>
                <p>
                    <span className="bold">第７条（お問い合わせ窓口）</span><br/>
                    個人情報に関するお問い合わせは、メールにて受け付けております。<br/>
                    eメールアドレス：integralyou.edu＠gmail.com<br/>
                </p>
            </div>
        </div>
    )
}
