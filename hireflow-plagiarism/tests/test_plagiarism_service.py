import unittest

from services.plagiarism_service import check_plagiarism


class PlagiarismServiceTests(unittest.TestCase):
    def test_identical_text_is_critical(self):
        text = (
            "I built a distributed hiring platform using Angular and ASP.NET Core "
            "with event driven processing and measurable latency improvements."
        )

        result = check_plagiarism(text, [text], "app-1")

        self.assertEqual(result["similarity_percent"], 100)
        self.assertEqual(result["risk_level"], "critical")
        self.assertTrue(result["is_plagiarised"])

    def test_unrelated_text_is_low_risk(self):
        submitted = (
            "I design accessible frontend systems with Angular, TypeScript, "
            "component testing, and performance budgets."
        )
        existing = (
            "Our finance team reconciles vendor invoices, prepares quarterly tax "
            "reports, and manages banking relationships."
        )

        result = check_plagiarism(submitted, [existing], "app-2")

        self.assertEqual(result["risk_level"], "low")
        self.assertFalse(result["is_plagiarised"])

    def test_common_template_words_do_not_trigger_high_risk(self):
        submitted = (
            "I am applying for this role because the opportunity matches my "
            "experience building reliable user interfaces for healthcare teams."
        )
        existing = (
            "I am applying for this position because your company offers an "
            "opportunity to use my accounting experience with retail businesses."
        )

        result = check_plagiarism(submitted, [existing], "app-3")

        self.assertNotIn(result["risk_level"], {"high", "critical"})
        self.assertFalse(result["is_plagiarised"])

    def test_empty_comparison_collection_returns_zero(self):
        result = check_plagiarism("A valid original cover letter.", [], "app-4")

        self.assertEqual(result["similarity_percent"], 0)
        self.assertIsNone(result["top_match_index"])


if __name__ == "__main__":
    unittest.main()
