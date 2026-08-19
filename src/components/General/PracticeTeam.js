import React, { useMemo } from "react";

const DEFAULT_COLUMNS = 3;
const MAX_VISIBLE_LANGUAGES = 2;

const GROUPS = [
    {
        key: "management",
        title: "Practice Management",
        match: (person) => /practice manager/i.test(person?.title || "")
    },
    {
        key: "nursing",
        title: "Nursing Team",
        match: (person) => /nurse|nursing/i.test(person?.title || "")
    },
    {
        key: "reception",
        title: "Reception & Administration",
        match: (person) => /reception|administration|admin/i.test(person?.title || "")
    },
    {
        key: "allied-health",
        title: "Allied Health & Support",
        match: (person) => /social worker|psych|counsell|therap|allied health/i.test(person?.title || "")
    }
];

const getInitial = (name = "Team Member") => name.trim().charAt(0).toUpperCase() || "T";

const StaffMember = ({ person }) => {
    const name = person?.name || "Team Member";
    const role = person?.title || "Practice Team";
    const languages = Array.isArray(person?.speaks) ? person.speaks.filter(Boolean) : [];
    const visibleLanguages = languages.slice(0, MAX_VISIBLE_LANGUAGES);
    const hasMoreLanguages = languages.length > MAX_VISIBLE_LANGUAGES;

    let imageSrc = null;
    if (person?.image) {
        try {
            imageSrc = require(`../../assets/img/staff/${person.image}`);
        } catch (error) {
            imageSrc = null;
        }
    }

    return (
        <article className="practice-team-item">
            <div className="practice-team-row">
                <div className="practice-team-avatar">
                    {imageSrc ? (
                        <img src={imageSrc} alt={name} />
                    ) : (
                        <span className="practice-team-avatar-fallback">{getInitial(name)}</span>
                    )}
                </div>

                <div className="practice-team-meta">
                    <h3 className="practice-team-name">{name}</h3>

                    {languages.length > 0 ? (
                        <div className="practice-team-languages">
                            <span className="practice-team-language-icon" aria-hidden="true">
                                <i className="fa fa-globe" />
                            </span>

                            <div className="practice-team-language-pills">
                                {visibleLanguages.map((language) => (
                                    <span
                                        key={`${name}-${language}`}
                                        className="practice-team-language-pill"
                                    >
                                        {language}
                                    </span>
                                ))}

                                {hasMoreLanguages ? (
                                    <span className="practice-team-language-pill more">More...</span>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    <div className="practice-team-role">
                        <span className="practice-team-role-pill">{role}</span>
                    </div>
                </div>

                <span className="practice-team-side" aria-hidden="true">
                    <i className="fa fa-angle-right" />
                </span>
            </div>
        </article>
    );
};

const PracticeTeam = ({
    staffData = [],
    columns = DEFAULT_COLUMNS,
    showDisabled = false,
    className = ""
}) => {
    const safeColumns = useMemo(() => {
        const parsed = Number(columns);
        return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : DEFAULT_COLUMNS;
    }, [columns]);

    const staff = useMemo(() => {
        if (!Array.isArray(staffData)) return [];

        return staffData.filter((person) => {
            if (!person || person.doctor === true) return false;
            if (!showDisabled && person.enabled !== true) return false;
            return true;
        });
    }, [staffData, showDisabled]);

    const groupedStaff = useMemo(() => {
        return GROUPS
            .map((group) => ({
                ...group,
                members: staff.filter(group.match)
            }))
            .filter((group) => group.members.length > 0);
    }, [staff]);

    if (groupedStaff.length === 0) return null;

    return (
        <section className={`practice-team ${className}`.trim()}>
            <style>{`
                .practice-team {
                    width: 100%;
                }

                .practice-team-group + .practice-team-group {
                    margin-top: 34px;
                }

                .practice-team-heading {
                    margin: 0 0 6px;
                    text-align: left;
                }

                .practice-team-title {
                    margin: 0;
                    color: #68717f;
                    font-size: 28px;
                    font-weight: 800;
                    line-height: 1.2;
                    letter-spacing: -0.03em;
                    text-transform: none;
                }

                .practice-team-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: repeat(var(--practice-team-columns), minmax(0, 1fr));
                    column-gap: 24px;
                    row-gap: 0;
                    box-sizing: border-box;
                }

                /* Intentionally follows DoctorsTeam / Doctor dimensions. */
                .practice-team-item {
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid #ececec;
                }

                .practice-team-row {
                    width: 100%;
                    min-width: 0;
                    min-height: 165px;
                    display: grid;
                    grid-template-columns: 104px minmax(0, 1fr) 24px;
                    gap: 14px;
                    align-items: stretch;
                    padding: 16px 0 12px;
                    box-sizing: border-box;
                }

                .practice-team-avatar {
                    width: 104px;
                    height: 104px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #e8f4f2;
                    box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.12);
                    flex-shrink: 0;
                    align-self: start;
                }

                .practice-team-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .practice-team-avatar-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0f766e;
                    font-size: 28px;
                    font-weight: 800;
                }

                .practice-team-meta {
                    min-width: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                    padding-top: 2px;
                    box-sizing: border-box;
                }

                .practice-team-name {
                    width: 100%;
                    margin: 0 0 6px;
                    padding: 0;
                    color: #2f3136;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.18;
                    text-align: left;
                }

                .practice-team-languages {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    min-width: 0;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                }

                .practice-team-language-icon {
                    width: 16px;
                    min-width: 16px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #ff6333;
                    font-size: 14px;
                }

                .practice-team-language-pills {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: nowrap;
                    min-width: 0;
                }

                .practice-team-language-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 22px;
                    padding: 0 7px;
                    border-radius: 999px;
                    background: #dff7f4;
                    border: 1px solid #bce8e2;
                    color: #0a4f4b;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 1;
                    white-space: nowrap;
                }

                .practice-team-language-pill.more {
                    background: #d4f1ed;
                    border-color: #a9ddd6;
                    color: #0a4f4b;
                }

                /* Staff equivalent of the doctor's booking area. */
                .practice-team-role {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                }

                .practice-team-role-pill {
                    min-width: 140px;
                    min-height: 33px;
                    padding: 0 16px;
                    border-radius: 999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #edf7f5;
                    border: 1px solid #cde9e4;
                    color: #0f766e;
                    font-size: 12px;
                    font-weight: 700;
                    line-height: 1;
                    white-space: nowrap;
                    box-sizing: border-box;
                }

                .practice-team-side {
                    width: 24px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    justify-self: end;
                    align-self: center;
                    color: #8a1fff;
                    opacity: 0.18;
                }

                .practice-team-side i {
                    font-size: 22px;
                    line-height: 1;
                }

                @media (max-width: 991px) {
                    .practice-team-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                    }
                }

                @media (max-width: 767px) {
                    .practice-team-group + .practice-team-group {
                        margin-top: 28px;
                    }

                    .practice-team-title {
                        font-size: 23px;
                    }

                    .practice-team-grid {
                        grid-template-columns: 1fr !important;
                        column-gap: 0;
                    }

                    .practice-team-row {
                        grid-template-columns: 88px minmax(0, 1fr) 24px;
                        gap: 12px;
                        min-height: 150px;
                        padding: 14px 0 12px;
                    }

                    .practice-team-avatar {
                        width: 88px;
                        height: 88px;
                    }

                    .practice-team-name {
                        font-size: 16px;
                    }

                    .practice-team-role-pill {
                        min-width: 130px;
                        min-height: 30px;
                        padding: 0 14px;
                        font-size: 11px;
                    }
                }
            `}</style>

            {groupedStaff.map((group) => (
                <section key={group.key} className="practice-team-group">
                    <div className="practice-team-heading">
                        <h2 className="practice-team-title">{group.title}</h2>
                    </div>

                    <div
                        className="practice-team-grid"
                        style={{ "--practice-team-columns": safeColumns }}
                    >
                        {group.members.map((person, index) => (
                            <StaffMember
                                key={person?.id || person?.name || index}
                                person={person}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </section>
    );
};

export default PracticeTeam;