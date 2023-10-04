from generate_release_notes_index import sort_func as sf


class TestSemantic:
    def test_simple(self):
        # major
        assert sf("33.0.0", "32.2.0") > 0
        assert sf("32.0.0", "33.0.0") < 0
        # minor
        assert sf("32.1.0", "32.2.0") < 0
        # patch
        assert sf("32.3.0", "32.2.0") > 0

    def test_rc_patchzero(self):
        assert sf("33.0.0rc1", "33.0.0") < 0
        assert sf("33.0.0rc1", "33.0.0rc2") < 0
        assert sf("33.0.0rc1", "32.0.0rc2") > 0

    def test_rc_patchnonzero(self):
        assert sf("33.0.1rc1", "33.0.1") < 0
        assert sf("32.0.2rc1", "32.0.2rc2") < 0

    def test_post(self):
        assert sf("32.1.2.post1", "32.1.2") > 0
        assert sf("32.1.2.post1", "32.1.2.post2") < 0
        assert sf("33.0.0.post1", "32.0.0.post2") > 0

    def test_mixed_rc_post(self):
        assert sf("32.1.2.post1", "32.1.2rc1") > 0


class TestLegacy:
    def test_simple(self):
        # major
        assert sf("1.26.0", "1.25.0") > 0
        # minor
        assert sf("1.25.1", "1.25.0") > 0

    def test_rc(self):
        assert sf("1.25.0rc1", "1.25.0") < 0
        assert sf("1.25.0rc1", "1.25.0rc2") < 0
        assert sf("1.25.0rc1", "1.24.0rc2") > 0
        # nonzero minor
        assert sf("1.25.1rc1", "1.25.1rc2") < 0

    def test_post(self):
        assert sf("1.25.0.post1", "1.25.0") > 0
        assert sf("1.25.0.post1", "1.25.0.post2") < 0
        assert sf("1.26.0.post1", "1.25.0.post2") > 0

    def test_mixed_rc_post(self):
        assert sf("1.25.0.post1", "1.25.0rc1") > 0
        assert sf("1.25.1.post1", "1.25.1rc1") > 0
